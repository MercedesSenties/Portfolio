import { Button, Card, CardBody, Collapse } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { LuGamepad2 } from "react-icons/lu";
import { SlArrowDown } from "react-icons/sl";
import CustomBtnWithIcon from "../reusable/CustomBtnWithIcon";
import MoreInfoSection from "./MoreInfoSection";
import MoreInfoSectionList from "./MoreInfoSectionList";
import TeamLayout from "./TeamLayout";

const ShowMore = ({ role, timeline, teamList, did, url, buttonTitle }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <Fragment>
      <Button
        onClick={toggleOpen}
        className="font-general-bold text-ternary-dark dark:text-ternary-light 
            bg-ternary-light dark:bg-card-dark rounded-lg mt-4 hover:scale-110
            border-2 border-card-dark dark:border-card-light">
        <div className="flex flex-row">
          <p>Show more</p>
          <SlArrowDown
            className="ml-2 text-lg"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0)",
            }}></SlArrowDown>
        </div>
      </Button>
      <Collapse open={open}>
        <Card className="my-2 bg-card-light dark:bg-card-dark">
          <CardBody className="divide-y dark:divide-divider-dark">
            <MoreInfoSection
              title="Duration:"
              body={timeline}></MoreInfoSection>
            <MoreInfoSection
              title="Role:"
              body={role}></MoreInfoSection>
            <MoreInfoSectionList
              title="Contributions:"
              bulletpoints={did}
              info="ch"></MoreInfoSectionList>
            <TeamLayout
              title="Collaborators:"
              teamList={teamList}></TeamLayout>
            {url && (
              <CustomBtnWithIcon
                buttonTitle={buttonTitle}
                url={url}
                icon={<LuGamepad2></LuGamepad2>}></CustomBtnWithIcon>
            )}
          </CardBody>
        </Card>
      </Collapse>
    </Fragment>
  );
};

export default ShowMore;
