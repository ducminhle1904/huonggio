import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import React from "react";

export default function SidePanel({ isOpen, onClose, childContent }) {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your Cart</DrawerHeader>
                <DrawerBody>{childContent}</DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
