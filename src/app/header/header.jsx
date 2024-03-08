import Inputs from "@/components/input";
import Uploads from "@/components/uploads";
import { Col, Divider, Row } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAreas from "@/components/textAreas";



export default function Header() {





    return (
        <div >
            <Divider orientation="left">Horizontal</Divider>
            <div className="flex items-center">
                <div > <Uploads /></div>
                <div className="px-10 ">
                    <h2 className=" font-bold ">
                        Rahul R
                    </h2>
                    <Inputs
                        className={"input_class_1"}
                        prefix={<UserOutlined />}
                        defaultValue=" Front End Developer"
                    />
                    <Inputs
                        className={"input_class_1"}
                        prefix={<UserOutlined />}
                        defaultValue=" 20/22d North Car Street Boothapandy Nagercoil "
                    />

                    <div className="flex">
                        <Inputs
                            className={"input_class_1 w-0.5"}
                            prefix={<UserOutlined />}
                            defaultValue=" Hybrid "
                        />
                        <Inputs
                            className={"input_class_1"}
                            prefix={<UserOutlined />}
                            defaultValue=" 13/Jun/2000 "
                        />
                    </div>

                    <Inputs
                        className={"input_class_1"}
                        prefix={<UserOutlined />}
                        defaultValue="+91 9677559741 "
                    />
                    <Inputs
                        className={"input_class_1"}
                        prefix={<UserOutlined />}
                        defaultValue="rahulsaba2000@gmail.com "
                    />

                </div>
            </div>

            <div className="pt-10 pl-36">
                <TextAreas
                className={''}
                    defaultValue={"Have Been Involved in Web Development for the past 1+ years . Primary focus being on development multi-tier web applications involving complex R&D activities. Also have experience building standards complaint customer-facing role and managing projects."}
                />
            </div>
        </div>
    );
}
