/*
"grunt" alone creates a new, completed images directory
"grunt clean" removes the images directory
"grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {
	// Set
	grunt.initConfig({
		responsive_images: {
			projects: {
				options: {
					rename: false,
					engine: 'gm', // gm for node, im for ImageMagick
					sizes: [{
                        name: "",
						width: 300,
						quality: 80
					}]
				},

				/*
				You don't need to change this part if you don't change
				the directory structure.
				*/
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'images_orig/',
					dest: 'images/'
				}]
            }
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['images'],
			},
		},

		/* Generate the images directory if it is missing */
		mkdir: {
			dev: {
				options: {
					create: ['images']
				},
			},
		},

		/* Copy the "fixed" images that don't go through processing into the images directory */
		copy: {
			svg: {
			files: [{
				expand: true,
				cwd:'images_orig/cropped',
				src: '*.jpg',
				dest: 'images/cropped'
			}]
        }
      }
    });

    // Load
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir','copy', 'responsive_images']);

};
