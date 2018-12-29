import App from './App.html';

// QUESTION: is this ok?
import {version} from '../package';

const app = new App({
	target: document.body,
	data: {
		name: 'That Docker Registry',
		subtitle: '',
		item: null,
		isList: true,
		appTitle: "That Docker Registry",
		repositoryName: null,
		version: "0.0",
		uiVersion: version
	}
});

export default app;
