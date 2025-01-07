import { throwUserResponse } from "@/utils";
import debugConsole from "@/utils/debugger";
import { MAILDRIP_CONFIG } from "../config";

export async function mailApiBaseService({
  body,
  route,
  method = "POST",
  xHeaders,
  xErrorMessage,
  xSuccessMessage,
}) {
  try {
    const resp = await fetch(`${MAILDRIP_CONFIG.baseUri}${route}`, {
      method: method,
      headers: { ...MAILDRIP_CONFIG.headers, ...xHeaders },
      body: JSON.stringify({ ...body }),
    });

    if (!resp.ok) {
      const errResp = await resp.json();
      debugConsole({ resp: errResp });
      return throwUserResponse({
        status: errResp?.status || resp.status,
        success: errResp?.statusCode || false,
        message:
          xErrorMessage ||
          errResp?.message ||
          `${resp.statusText}- Unable to add contact`,
      });
    }
    const respData = await resp.json();
    debugConsole(respData);
    return throwUserResponse({
      status: 200,
      success: true,
      message:
        xSuccessMessage || `Added ${body.email} successfully to maildrip`,
    });
  } catch (error) {
    return throwUserResponse({
      status: 500,
      success: false,
      message: "An error occurred",
    });
  }
}

export async function addContactToMDcontactsGroup(body) {
  return mailApiBaseService({
    body: {
      ...body,
      groups: [MAILDRIP_CONFIG.contactUsGroupId],
    },
    route: "/contacts",
  });
}

export async function addContactToMDsubmitMusicGroup(body) {
  return mailApiBaseService({
    body: {
      ...body,
      groups: [MAILDRIP_CONFIG.submitMusicGroupId],
    },
    route: "/contacts",
  });
}

export async function addContactToMDregisterToAttendGroup(body) {
  return mailApiBaseService({
    body: {
      ...body,
      groups: [MAILDRIP_CONFIG.registerGroupId],
    },
    route: "/contacts",
  });
}

export async function addContactToMDbookAstandGroup(body) {
  return mailApiBaseService({
    body: {
      ...body,
      groups: [MAILDRIP_CONFIG.bookAstandGroupId],
    },
    route: "/contacts",
  });
}

export async function addContactToMDsubscribeNewsletterGroup(body) {
  return mailApiBaseService({
    body: {
      ...body,
      groups: [MAILDRIP_CONFIG.subscribeNewsletterGroupId],
    },
    route: "/contacts",
  });
}
