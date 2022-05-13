import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function ProductFilter() {
    return (
        <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
                <Tab>All Products</Tab>
                <Tab>Women</Tab>
                <Tab>Men</Tab>
                <Tab>Bag</Tab>
                <Tab>Shoes</Tab>
                <Tab>Watches</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>All Products</p>
                </TabPanel>
                <TabPanel>
                    <p>Women</p>
                </TabPanel>
                <TabPanel>
                    <p>Men</p>
                </TabPanel>
                <TabPanel>
                    <p>Bag</p>
                </TabPanel>
                <TabPanel>
                    <p>Shoes</p>
                </TabPanel>
                <TabPanel>
                    <p>Watches</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
