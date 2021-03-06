import { Typography, Paper, Grid, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from './quizzes';

function Home() {
	const quizArr = Object.keys(quizzes);
	const quizList = quizArr.map((name) => (
		<Grid item sm={4} md={3} style={{ 'margin-top': '20px' }}>
			<Link to={`/music-quizzer/${name}`} style={{ textDecoration: 'none' }}>
				{/* <Button variant='contained' color='primary'>
					<Typography style={{ fontFamily: 'Work Sans', fontSize: '20px' }}>
						{name}
					</Typography>
				</Button> */}
				<button className='homeQuizButton' data-hover='Start'>
					<div>{name}</div>
				</button>
			</Link>
		</Grid>
	));

	return (
		<div className='Home'>
			<Grid
				container
				justify='space-evenly'
				spacing={3}
				style={{ width: '100%', padding: '0 20px 0 20px', margin: '0px' }}>
				{quizList}
			</Grid>
		</div>
	);
}

export default Home;
