import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarGroup } from "@mui/material";
import { FaHome } from "react-icons/fa";

const TeamBoard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex gap-2 items-center text-cyan-500 cursor-pointer">
          <FaHome onClick={() => navigate("/dashboard")} />
          <span>/</span>
          <span>Team Board</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-5 ">
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">1-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">2-React</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    5
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    8
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">3-Laravel</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    2
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    8
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">4-Next js</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    2
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">5-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">6-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">7-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">8-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">9-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">10-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">11-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">12-Testing</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    1
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4  shadow-2xl">
              <div className="flex justify-between items-center pb-4">
                <span className="text-cyan-500">13-</span>
                <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                <AvatarGroup>
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                  <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg" />
                </AvatarGroup>
              </div>
              <div className=" border border-gray-500"></div>
              <div className="pt-4 flex gap-5 justify-between">
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Projects
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    12
                  </div>
                </div>
                <div className="flex shadow-2xl">
                  <div className="bg-cyan-200 flex justify-center w-[155px] rounded-l-lg py-1 ">
                    {" "}
                    Members
                  </div>
                  <div className="border border-cyan-200 flex justify-center rounded-r-lg py-1  w-[155px]">
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBoard;
