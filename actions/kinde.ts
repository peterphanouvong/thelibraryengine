"use server";

import { Organizations, init } from "@kinde/management-api-js";

export const getOrganizations = async () => {
  init();
  return await Organizations.getOrganizations();
};

export const getOrganizationByCode = async (code: string) => {
  init();
  return await Organizations.getOrganization({
    code,
  });
};
