import { Fragment, useState } from "react";
import {Collapse, Button, Card, CardBody} from "@material-tailwind/react";
import MoreInfoSection from "./MoreInfoSection";
import MoreInfoSectionList from "./MoreInfoSectionList"
import { SlArrowDown } from "react-icons/sl";
import CustomBtnWithIcon from "../reusable/CustomBtnWithIcon"
import TeamLayout from "./TeamLayout";
import { LuGamepad2 } from "react-icons/lu";

const ShowMore = ({ role, timeline, teamList, did, url, buttonTitle }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    return (
        <Fragment>
            <Button onClick={toggleOpen} 
            className="font-general-bold text-ternary-dark dark:text-ternary-light 
            bg-ternary-light dark:bg-[#22486a] rounded-lg mt-4 hover:scale-110
            border-2 border-[#22486a] dark:border-[#f3f7fc]">
                <div className="flex flex-row">
                    <p>Show more</p>
                    <SlArrowDown 
                        className="ml-2 text-lg"             
                        style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}>
                    </SlArrowDown>
                </div>
            </Button>
            <Collapse open={open}>
                <Card className="my-2 bg-[#f3f7fc] dark:bg-[#22486a]">
                    <CardBody className="divide-y dark:divide-[#1e3851]">
                        <MoreInfoSection title="Duration:" body={timeline}></MoreInfoSection>
                        <MoreInfoSection title="Role:" body={role}></MoreInfoSection>
                        <MoreInfoSectionList title="Contributions:" bulletpoints={did} info='ch'></MoreInfoSectionList>
                        <TeamLayout title="Collaborators:" teamList={teamList}></TeamLayout>
                        {url &&(
                            <CustomBtnWithIcon buttonTitle={buttonTitle} url={url} icon={<LuGamepad2></LuGamepad2>}></CustomBtnWithIcon>
                        )}
                    </CardBody>
                </Card>
            </Collapse>
        </Fragment>
  );
};

export default ShowMore;