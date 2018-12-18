import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

interface Props {classes: any, img:string, link:string, title:string}
interface State {hover:boolean}

const styles = createStyles({
	card: {
		margin: 40,
		width: 250,
		display: 'flex',
		flexFlow: 'column nowrap',
	},
	img: {
		height: 180,
		backgroundSize: 'cover',
	},
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems:'center',
		fontSize: '1em',
		fontFamily: 'Roboto, sans-serif',
		letterSpacing: 1.5,
		fontWeight: 600,
		padding: '30px 0'

	},
	contentColumn: {
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'space-between',
		width: '100%',
		flex: 1,
	},
	btn: {
		padding: 20,
		backgroundColor: 'rgba(0,0,0,.03)'

	},
})


class ArticleCard extends Component<Props, State> {
	
	state = {
		hover: false
	}

	handleOver = () => {
		this.setState({hover: true})
	}

	handleLeave = () => {
		this.setState({hover: false})
	}

	render() {
		const {classes, img, link, title} = this.props
		return (
			<Card className={classes.card}>
				<div className={classes.title}>{title}</div>
				<div className={classes.img} style={{backgroundImage: `url(${img})`}} onMouseOver={this.handleOver} onMouseLeave={this.handleLeave}>
					{this.state.hover ? 
						<div className={classes.img} style={{backgroundColor: 'rgba(0,0,0,.8)'}}>
							<div className={classes.title}>hi bryn this is my secret hover message to you meep</div>
						</div>
						: null
					}
				</div>
				<div className={classes.contentColumn}>
					<Button className={classes.btn} href={link}>Read Article</Button>
				</div>
			</Card>
		)
	}
}

export default withStyles(styles)(ArticleCard)