import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3, fontFamily: '"Georgia", serif', fontSize: '18px', lineHeight: '1.8', color: '#FFFFFF' }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const hoverStyle = {
        backgroundColor: 'transparent', // Removes the blue color
        boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 6px 12px, rgba(0, 0, 0, 0.35) 0px 8px 16px, rgba(0, 0, 0, 0.3) 0px 12px 24px, rgba(0, 0, 0, 0.25) 0px 16px 32px',
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    backgroundColor: '#363C43', // Tabs background color
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        label="About"
                        {...a11yProps(0)}
                        sx={{
                            color: 'white',
                            '&:hover': hoverStyle,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            backgroundColor: 'transparent', // Ensures no blue background color
                        }}
                    />
                    <Tab
                        label="Experiences"
                        {...a11yProps(1)}
                        sx={{
                            color: 'white',
                            '&:hover': hoverStyle,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            backgroundColor: 'transparent', // Ensures no blue background color
                        }}
                    />
                    <Tab
                        label="Recommended"
                        {...a11yProps(2)}
                        sx={{
                            color: 'white',
                            '&:hover': hoverStyle,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            backgroundColor: 'transparent', // Ensures no blue background color
                        }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Hello! I’m Dave, your sales rep here from Salesforce.
                I’ve been working at this awesome company for 3 years now.
                I was born and raised in Albany, NY, and have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my 4-year-old
                twin daughters, Emma and Ella. Both of them are just starting school,
                so my calendar is usually blocked between 9-10 AM. This is a...
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                I’m Sarah, your customer success manager from HubSpot.
                I’ve been with this fantastic company for 5 years now,
                helping businesses grow and achieve their goals.
                I grew up in Denver, CO, and have been living in
                Austin, TX, for the last 8 years with my husband, Michael,
                and our 6-year-old son, Lucas. My passion for technology and
                people drives me to ensure our clients get the best out of our platform.
                Outside work, I enjoy hiking and spending quality time with my family.
                My schedule is often packed, but I always make time for client success.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                I highly recommend Julia as a marketing strategist. 
                She has an exceptional ability to craft compelling campaigns that resonate with target audiences.
                I had the pleasure of working with Julia at a fast-growing startup, 
                where her innovative ideas led to a 30% increase in customer engagement within just six months. 
                Julia’s deep understanding of digital marketing trends, combined with her creativity and analytical skills, 
                makes her an invaluable asset to any team. She’s also an excellent communicator and collaborator, 
                always willing to go the extra mile to ensure success. I believe she would be a fantastic addition to any project.
            </CustomTabPanel>
        </Box>
    );
}
