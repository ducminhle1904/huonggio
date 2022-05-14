import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

export default function ModalPopup({ onClose, isOpen, modalTitle, childContent }) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={"6xl"} scrollBehavior={scrollBehavior}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{childContent}</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
