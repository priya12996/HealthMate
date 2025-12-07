import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <Card
            sx={{
                display: { xs: 'flex-wrap', md: 'flex' },
                maxWidth: '600px',
                my: 8,
                mx: 'auto',
                p: 5
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Welcome to our Hospital,
                        {" "}
                        {user?.displayName || "Guest User"}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {user?.email || "No email available"}
                    </Typography>
                </CardContent>
            </Box>

            <Avatar
                sx={{
                    mx: { xs: "auto", md: 1 },
                    border: 1,
                    borderColor: '#f48fb1',
                    boxShadow: 1,
                    bgcolor: pink[500],
                    width: 150,
                    height: 150
                }}
                alt={user?.displayName || "User"}
                src={user?.photoURL || ""}
            />
        </Card>
    );
};

export default UserProfile;
