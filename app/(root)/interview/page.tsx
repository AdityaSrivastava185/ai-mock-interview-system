import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3 className="md:mt-[-30px]">Schedule and Generate an Interview</h3>
      <p className="md:mt-[-30px]">Please click on the call button to start the converation to generate the interview and get it ready </p>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
