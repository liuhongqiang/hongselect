module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		clean: { 
			build: { 
				src: ["dist/**"]
			}
		},
		uglify: {
			build: {
				src: "src/hongselect.src.js",
				dest: "dist/hongselect.min.js"
			}
		},
		cssmin: {
			build: {
				src: "src/css/hongselect.src.css",
				dest: "dist/css/hongselect.min.css"
			}
		},
		imagemin: {
			build: {
				src: "src/img/arrow.png",
				dest: "dist/img/arrow.png"
			}
		}
	});

	//注册插件
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	// 默认被执行的任务列表。
	grunt.registerTask("default", ["clean","uglify","cssmin","imagemin"]);
};