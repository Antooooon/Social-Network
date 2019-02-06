import Func from './site/State/state';
import {addPost} from './site/State/state';
import {ready} from './site/render';
import {setText} from './site/State/state';
import {addMessage} from './site/State/state';
import {setMessage} from './site/State/state';

ready(Func,addPost,setText,addMessage,setMessage);