import { useDisclosure } from "@chakra-ui/react";
import SidePanel from "./Common/SidePanel";
import Footer from "./footer";
import Header from "./header";
import CartSlideOver from "./CartSlideOver";

export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Header onOpen={onOpen} />
            <main>{children}</main>
            <SidePanel isOpen={isOpen} onClose={onClose} childContent={<CartSlideOver />}></SidePanel>
            <Footer />
        </>
    );
}
