import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function AvatarComponent({ user }) {
    return (
        <>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<Avatar name={user?.email} size="sm" src={user?.image} />}
                    variant="outline"
                />
                <MenuList>
                    <MenuItem>Lịch sử đặt hàng</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}
