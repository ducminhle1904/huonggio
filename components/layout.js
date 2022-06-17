import { useDisclosure } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import dynamic from "next/dynamic";
const SidePanel = dynamic(() => import("./Common/SidePanel"));
const CartSlideOver = dynamic(() => import("./CartSlideOver"));

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Header openCart={onOpen} />
            <main>{children}</main>
            <SidePanel isOpen={isOpen} onClose={onClose} childContent={<CartSlideOver />}></SidePanel>
            <Footer />
        </>
    );
}
