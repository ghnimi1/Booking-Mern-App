import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function AlertMessage({ error }) {
    return (
        <Alert severity="error" color="error"
            style={{ marginBottom: '1px', marginTop: '1px' }}>
            {error}
        </Alert>
    );
}
