import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button,
	Linking,
	TextInput
} from 'react-native';
import Modal from 'react-native-modal'
import SplashScreen from '../components/SplasScreen';
export default class HomeScreen extends Component {

	state = {
		isVisible: false,
		profile: 'MauricioLoya',
		user: null
	}

	async componentDidMount() {
		await this.searchProfile()
	}

	goToProfile = () => {
		Linking.openURL('https://www.google.com/')
			.catch(e => console.log(e))
	}

	handleModal = () => {
		this.setState({ isVisible: !this.state.isVisible })
	}

	searchProfile = async () => {

		this.setState({ user: null, isVisible: false })
		try {
			const url = `https://api.github.com/users/${this.state.profile}`
			this.setState({
				user: await fetch(url).then(r => r.json())
			})


		} catch (error) {
			alert(error)
		}
	}


	render() {

		if (!this.state.user) {
			return (
				<SplashScreen title='Cargando...' />
			)
		}

		return (
			<View style={styles.container}>
				<ScrollView>

					<View style={styles.container}>
						<Image
							style={{ height: 300, width: 300, borderRadius: 150 }}
							source={{ uri: this.state.user.avatar_url }}
						/>
						<Text style={styles.title}>{this.state.user.name}</Text>
						<Text style={styles.login} >{this.state.user.login}</Text>
						<Text style={styles.text}>{this.state.user.location}</Text>
						<Text style={styles.text}>{this.state.user.bio}</Text>

						<Button
							title='Ver Perfil'
							onPress={this.goToProfile}
						/>

					</View>
					<View>
						<Button
							title='Buscar'
							onPress={this.handleModal}
						/>
					</View>
				</ScrollView>
				<Modal onModalShow={() => this.setState({ profile: '' })} animationIn='zoomInDown' animationOut='zoomOutUp' isVisible={this.state.isVisible}>
					<View style={{ backgroundColor: '#282C34', padding: 30 }}>
						<Text style={styles.text}>Perfil:</Text>
						<TextInput
							style={styles.input}
							onChangeText={(profile) => this.setState({ profile })}
							value={this.state.profile}
						/>
						<View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly' }}>
							<Button
								title='Buscar'
								color='green'
								onPress={this.searchProfile}
							/>
							<Button
								title='Cerrar'
								color='red'
								onPress={this.handleModal}
							/>
						</View>

					</View>
				</Modal>
			</View>
		);
	}
}

const styles = new StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: '#282C34',
		padding: 20
	},
	login: {
		color: '#E83E8C',
		fontSize: 20
	},
	text: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center'
	},
	title: {
		color: '#fff',
		fontSize: 30,
		margin: 10,
		fontWeight: 'bold'
	},
	input: {
		borderColor: '#fff',
		borderWidth: 0.5,
		borderRadius:7,
		margin: 10,
		color:'#fff'
	}

})