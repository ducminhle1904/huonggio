import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

export default function ModalPopup({ onClose, isOpen, modalTitle, childContent, size }) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                size={size}
                scrollBehavior={scrollBehavior}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent marginTop="0">
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{childContent}</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
