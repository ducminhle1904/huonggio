import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
} from "@chakra-ui/react";

export default function SidePanel({ isOpen, onClose, childContent }) {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>{childContent}</DrawerBody>

                {/* <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    );
}
