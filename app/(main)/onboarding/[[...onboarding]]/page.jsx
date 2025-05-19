"use client";

import {
  CreateOrganization,
  useOrganization,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Onboarding() {
  const { organization, isLoaded } = useOrganization();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && organization) {
      router.push(`/organization/${organization.slug}`);
    }
  }, [isLoaded, organization, router]);

  // Only show component if organization is loaded AND doesn't exist
  if (!isLoaded) {
    return <div className="flex justify-center items-center pt-14">Loading...</div> // optional: replace with <LoadingSpinner />
  }

  if (organization) {
    return <div className="flex justify-center items-center pt-14">Loading...</div> // optional: replace with <LoadingSpinner />; // while redirecting
  }

  return (
    <div className="flex justify-center items-center pt-14">
      <CreateOrganization
        hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
      />
    </div>
  );
}
