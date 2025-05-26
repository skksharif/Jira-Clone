import {getOrganization} from "@/actions/organizations";
import OrgSwitcher from "@/components/org-switcher";
import ProjectList from "./_components/project-list";

export default async function page({params}) {
    const {orgId} = params;
    const organization = await  getOrganization(orgId);
    console.log("MyOrg",organization)

    if(!organization){
      return(
        <div className="flex justify-center items-center pt-5">
             Organization not found
        </div>
      );
    }

  return (
    <div className="container max-auto ">
       <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
          <h1 className="text-5xl font-bold gradient-title pb-2">
             {organization.name}'s Projects
          </h1>
          {/*Switch */}
          <OrgSwitcher/>
       </div>
       <div className="mb-4">
         <ProjectList/>
       </div>
        <div className="mt-7">Show user assigned and reported issues here</div>
    </div>
  )
}
