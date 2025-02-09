import { Breadcrumbs, Link, Typography } from '@mui/material';
import * as React from 'react';
export const CustomBreadCrumb = (props) => {
    return (
        <>
            <Breadcrumbs>
                {
                    props.page.map((itm) => {
                        return (
                            <>
                            <Link sx={{
                                  color: '#fff',
                                  opacity: .8,
                                  fontSize: '14px',
                                  fontFamily: '"Montserrat", serif',
                            }}>
                                {itm.pageName}
                            </Link>
                            </>
                        )
                    })
                }
















            </Breadcrumbs>
        </>
    )
}