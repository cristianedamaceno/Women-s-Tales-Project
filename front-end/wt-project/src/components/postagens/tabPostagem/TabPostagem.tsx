import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listarPostagem/ListarPostagem';
import './TabPostagem.css';


function TabPostagem() {

	const [value, setValue] = useState('1')
	function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
		setValue(newValue);
	}

	return (
		<>
			<TabContext value={value}>
				<AppBar position="static">
					<Tabs centered indicatorColor="secondary" onChange={handleChange}>
						<Tab label="Todas as postagens" value="1" />
					</Tabs>
				</AppBar>
				<TabPanel value="1" >
					<Box display="flex" flexWrap="wrap" justifyContent="center">
						<ListaPostagem />
					</Box>
				</TabPanel>
			</TabContext>
		</>
	);
}

export default TabPostagem;