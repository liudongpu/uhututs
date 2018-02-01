import { IConfigInfo, IConfigParse } from './../../air/interfaces/config';

var through = require('through2');
var gutil = require('gulp-util');
import { TNodeIoFile } from '../../tnode/index';
import { KJobFileInfo } from '../../air/keep/job';
import { TJobSupportParse } from '../../tjob/index';

export class GulpParse {


    static gulpContent(oLocalConfig: IConfigInfo, oParse: IConfigParse) {


        return through.obj(function (file, enc, cb) {

            // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
            if (file.isNull()) {
                this.push(file);
                return cb();
            }

            // 插件不支持对 Stream 对直接操作，跑出异常
            if (file.isStream()) {
                this.emit('error', new gutil.PluginError("GulpPlus", 'Streaming not supported'));
                return cb();
            }

            // 将文件内容转成字符串，并调用 preprocess 组件进行预处理
            // 然后将处理后的字符串，再转成Buffer形式




            var oParseFile = new KJobFileInfo();
            
            oParseFile.content = file.contents.toString();

           oParseFile.name=TNodeIoFile.upBaseName(file.relative, undefined);

            //oParseFile.path = TNodeIoFile.upBaseName(file.relative, undefined);
            oParseFile.path=file.history[0];
            //var content = initWork.parseContent(oConfig, oParseFile);
            let content = TJobSupportParse.contentParse(oLocalConfig, oParseFile,oParse);

            file.contents = new Buffer(content);


            // 下面这两句基本是标配啦，可以参考下 through2 的API
            this.push(file);

            cb();
        });


    }



   
}

