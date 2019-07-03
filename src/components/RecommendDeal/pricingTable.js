import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';



export const PricingTable = (props) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableCell>Party Size<br/>(People)</TableCell>
				<TableCell align="center">Gift Card<br/>Value</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow key="UNIQUE_ID">
				<TableCell component="th" scope="row">
					Up to 30
				</TableCell>
				<TableCell align="center">€ 15.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID2">
				<TableCell component="th" scope="row">
					31 - 50
				</TableCell>
				<TableCell align="center">€ 20.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID3">
				<TableCell component="th" scope="row">
					51 - 100
				</TableCell>
				<TableCell align="center">€ 35.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID4">
				<TableCell component="th" scope="row">
					101 - 200
				</TableCell>
				<TableCell align="center">€ 60.00</TableCell>
			</TableRow>
			<TableRow key="UNIQUE_ID5">
				<TableCell component="th" scope="row">
					201+
				</TableCell>
				<TableCell align="center">€ 100.00</TableCell>
			</TableRow>

		</TableBody>
	</Table>
)
