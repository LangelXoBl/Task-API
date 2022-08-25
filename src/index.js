//#archivo de inicializacion
import app from './app';
import './DB';

app.listen(app.get('port'));
console.log('Server on Port: ',app.get('port'));