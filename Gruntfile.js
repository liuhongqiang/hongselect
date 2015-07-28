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
				expand:true,
				src: "src/hongselect.src.js",
				dest: "dist/hongselect.min.js"
			}
		},
		cssmin: {
			build: {
				expand:true,
				src: "css/hongselect.src.css",
				dest: "dist/hongselect.src.min.css"
			}
		},
		imagemin: {
			build: {
				expand:true,
				src: "src/img/**/*",
				dest: "dist/"
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