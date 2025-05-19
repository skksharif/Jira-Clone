"use client";

import {
  OrganizationSwitcher,
  SignedIn,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";

const orgSwitcher = () => {
  const { isLoaded } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const pathname = usePathname();

  if (!isLoaded || !isUserLoaded) {
    return null;
  }
  return (
    <div>
      <SignedIn>
        <OrganizationSwitcher
          hidePersonal
          createOrganizationMode={
            pathname === "/onboarding" ? "navigation" : "modal"
          }
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
          createOrganizationUrl="/onboarding"
          appearance={{
            elements: {
              organizationSwitcherTrigger:
                "border border-gray-300 rounded-md px-5 py-2 bg-white",
              organizationSwitcherTriggerIcon: "text-white",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default orgSwitcher;
