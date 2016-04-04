module.exports = function(grunt){
    grunt.initConfig({
        slim: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    './index.html': './slim/index.slim'
                }
                //,
                //options: {
                //    '-r': 'slim/include'
                //}
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded',
                    loadPath: ['./sass']
                },
                files: {                         // Dictionary of files
                    './css/main.css': './sass/main.scss'       // 'destination': 'source'

                }
            }
        },
        sprite:{
            all:{
                src: './img/common-sprite/**/**/**/*.png',
                dest: './img/common-sprite.png',
                destCss: './sass/generated/_common-sprite.scss',
                cssTemplate: './grunt/templates/sprites.scss.handlebars',
                imgPath: '../img/common-sprite.png',
                padding: 2
            }
        },
        watch: {
            files: ['./**/*.scss', './**/*.slim', './img/common-sprite/**/**/**/*.png'],
            tasks: ['slim', 'sass', 'sprite']
        }
    });

    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['slim', 'sass', 'sprite', 'watch']);
}