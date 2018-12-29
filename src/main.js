import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'That Docker Registry',
		subtitle: '',
		item: null,
		isList: true,
		appTitle: "That Docker Registry",
		repositoryName: null,
		version: "0.0"
	}
});

export default app;
