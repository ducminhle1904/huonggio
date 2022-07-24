import {
    Avatar,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Table from "./Common/Table";

const ModalPopup = dynamic(() => import("./Common/Modal"), {
    ssr: false,
});

export default function AvatarComponent({ user }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: false,
    });

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
                    <MenuItem onClick={onOpen}>Lịch sử đặt hàng</MenuItem>
                </MenuList>
                <ModalPopup
                    isOpen={isOpen}
                    onClose={onClose}
                    modalTitle="Lịch sử đặt hàng"
                    childContent={<Table />}
                    size={isMobile ? "full" : "4xl"}
                />
            </Menu>
        </>
    );
}
