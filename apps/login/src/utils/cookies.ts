"use server";

import { cookies } from "next/headers";

export type SessionCookie = {
  id: string;
  token: string;
  loginName: string;
  organization?: string;
  creationDate: string;
  expirationDate: string;
  changeDate: string;
  authRequestId?: string; // if its linked to an OIDC flow
};

function setSessionHttpOnlyCookie(sessions: SessionCookie[]) {
  const cookiesList = cookies();
  // @ts-ignore
  return cookiesList.set({
    name: "sessions",
    value: JSON.stringify(sessions),
    httpOnly: true,
    path: "/",
  });
}

export async function addSessionToCookie(
  session: SessionCookie,
  cleanup: boolean = false,
): Promise<any> {
  const cookiesList = cookies();
  const stringifiedCookie = cookiesList.get("sessions");

  let currentSessions: SessionCookie[] = stringifiedCookie?.value
    ? JSON.parse(stringifiedCookie?.value)
    : [];

  const index = currentSessions.findIndex(
    (s) => s.loginName === session.loginName,
  );

  if (index > -1) {
    currentSessions[index] = session;
  } else {
    currentSessions = [...currentSessions, session];
  }

  if (cleanup) {
    const now = new Date();
    const filteredSessions = currentSessions.filter((session) =>
      session.expirationDate ? new Date(session.expirationDate) > now : true,
    );
    return setSessionHttpOnlyCookie(filteredSessions);
  } else {
    return setSessionHttpOnlyCookie(currentSessions);
  }
}

export async function updateSessionCookie(
  id: string,
  session: SessionCookie,
  cleanup: boolean = false,
): Promise<any> {
  const cookiesList = cookies();
  const stringifiedCookie = cookiesList.get("sessions");

  const sessions: SessionCookie[] = stringifiedCookie?.value
    ? JSON.parse(stringifiedCookie?.value)
    : [session];

  const foundIndex = sessions.findIndex((session) => session.id === id);

  if (foundIndex > -1) {
    sessions[foundIndex] = session;
    if (cleanup) {
      const now = new Date();
      const filteredSessions = sessions.filter((session) =>
        session.expirationDate ? new Date(session.expirationDate) > now : true,
      );
      return setSessionHttpOnlyCookie(filteredSessions);
    } else {
      return setSessionHttpOnlyCookie(sessions);
    }
  } else {
    throw "updateSessionCookie: session id now found";
  }
}

export async function removeSessionFromCookie(
  session: SessionCookie,
  cleanup: boolean = false,
): Promise<any> {
  const cookiesList = cookies();
  const stringifiedCookie = cookiesList.get("sessions");

  const sessions: SessionCookie[] = stringifiedCookie?.value
    ? JSON.parse(stringifiedCookie?.value)
    : [session];

  const reducedSessions = sessions.filter((s) => s.id !== session.id);
  if (cleanup) {
    const now = new Date();
    const filteredSessions = reducedSessions.filter((session) =>
      session.expirationDate ? new Date(session.expirationDate) > now : true,
    );
    return setSessionHttpOnlyCookie(filteredSessions);
  } else {
    return setSessionHttpOnlyCookie(reducedSessions);
  }
}

export async function getMostRecentSessionCookie() {
  return cookieSessions().sort(sortSessionCookie).at(0);
}

function cookieSessions(): SessionCookie[] {
  const stringifiedCookie = cookies().get("sessions");
  return stringifiedCookie?.value ? JSON.parse(stringifiedCookie?.value) : [];
}

export async function getSessionCookieById(
  id: string,
  organization?: string,
): Promise<SessionCookie> {
  const sessions = cookieSessions();

  const found = sessions.find((session) => {
    if (session.id !== id) {
      return false;
    }

    if (organization) {
      return session.organization === organization;
    }

    return true;
  });

  if (!found) {
    throw new Error("No session cookie found");
  }

  return found;
}

export async function getSessionCookieByLoginName(
  loginName: string,
  organization?: string,
): Promise<SessionCookie> {
  const sessions = cookieSessions();

  const found = sessions.find((session) => {
    if (session.loginName !== loginName) {
      return false;
    }

    if (organization) {
      return session.organization === organization;
    }

    return true;
  });

  if (!found) {
    throw new Error("No session cookie found");
  }

  return found;
}

/**
 *
 * @param cleanup when true, removes all expired sessions, default true
 * @returns Session Cookies
 */
export async function getAllSessionCookieIds(
  cleanup: boolean = false,
): Promise<any> {
  const cookiesList = cookies();
  const stringifiedCookie = cookiesList.get("sessions");

  if (stringifiedCookie?.value) {
    const sessions: SessionCookie[] = JSON.parse(stringifiedCookie?.value);

    if (cleanup) {
      const now = new Date();
      return sessions
        .filter((session) =>
          session.expirationDate
            ? new Date(session.expirationDate) > now
            : true,
        )
        .map((session) => session.id);
    } else {
      return sessions.map((session) => session.id);
    }
  } else {
    return [];
  }
}

/**
 *
 * @param cleanup when true, removes all expired sessions, default true
 * @returns Session Cookies
 */
export async function getAllSessions(
  cleanup: boolean = true,
): Promise<SessionCookie[]> {
  const sessions = cookieSessions();

  if (cleanup) {
    const now = new Date();
    return sessions.filter(isAfterExpirationDate(now));
  }

  return sessions;
}

function isAfterExpirationDate(now: Date) {
  return (session: SessionCookie) => {
    return session.expirationDate
      ? new Date(session.expirationDate) > now
      : true;
  };
}

function isLoginNameSessionCookie(loginName: string) {
  return (cookie: SessionCookie) => {
    return cookie.loginName === loginName;
  };
}

function isOrganizationSessionCookie(orgId: string) {
  return (cookie: SessionCookie) => {
    return cookie.organization === orgId;
  };
}

function sortSessionCookie(prev: SessionCookie, current: SessionCookie) {
  return (
    new Date(current.changeDate).getTime() - new Date(prev.changeDate).getTime()
  );
}

/**
 * Returns most recent session filtered
 * @param loginName filter by loginName
 * @param organization filter by organization
 * @returns most recent session
 */
export async function getMostRecentCookieWithLoginName(
  loginName?: string,
  organization?: string,
): Promise<any> {
  let sessions = cookieSessions();

  sessions = loginName
    ? sessions.filter(isLoginNameSessionCookie(loginName))
    : sessions;

  sessions = organization
    ? sessions.filter(isOrganizationSessionCookie(organization))
    : sessions;

  const latest = sessions.sort(sortSessionCookie).at(0);

  if (!latest) {
    throw new Error("No session cookie found");
  }

  return latest;
}
