"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";


const ProfileDropDown = () => {
  const [signedIn, setsignedIn] = useState(true);
 const [open, setOpen] = useState(false);
//   const { user, loading } = useUser();
//   const { data } = useSession();

    const logoutHandler = () => {
      alert('ok')
    };

  return (
    <div className="flex items-center gap-4">
    
        {signedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
            //   src={data?.user ? data.user.image : user.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {/* {data?.user ? data.user.email : user.email} */}
              </p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="all_orders">All Orders</DropdownItem>
            <DropdownItem key="team_settings">
              Apply for seller account
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => logoutHandler()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
       <CgProfile
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
    </div>
  );
};

export default ProfileDropDown;
