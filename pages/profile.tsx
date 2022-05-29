import React from "react";
import MainLayout from "../components/layouts/MainPage";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NFTGrid from "../components/layouts/NFTGrid";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labellåedby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function Profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <MainLayout>
            <main>
                <Container maxWidth="xl">
                    <Grid item xs={12}>
                        <h1>Your history at Bluckchain</h1>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Box>
                                <Tabs value={value} orientation="vertical" onChange={handleChange}>
                                    <Tab label="Active Challenges" />
                                    <Tab label="Challenges History" />
                                </Tabs>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <TabPanel value={value} index={0}>
                                <NFTGrid addresses={[]}></NFTGrid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <NFTGrid addresses={[]}></NFTGrid>
                            </TabPanel>
                           
                        </Grid>

                    </Grid>

                </Container>
            </main>
        </MainLayout>
    )
}