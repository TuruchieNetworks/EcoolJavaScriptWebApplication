// Carousel Images
import logo from '../../img/logo.jpg'; 
import pose_brown_gradient from '../../img/pose_brown_gradient.jpg'; 
import pose_gaze_brown from '../../img/pose_gaze_brown.jpg'; 
import smiling_pose_brown from '../../img/smiling_pose_brown.jpg'; 
import solid_pose_kharki from '../../img/solid_pose_kharki.jpg'; 

class ImageUtils {
    constructor() {
        this.images = {
            carousels: [
                logo,
                pose_brown_gradient,
                pose_gaze_brown,
                smiling_pose_brown,
                solid_pose_kharki,
            ],
            galaxies: [],
        };
    }

    // Method to get a random image from a specified category
    getRandomImage(category = 'carousels') {
        const categoryImages = this.images[category];
        if (categoryImages && categoryImages.length > 0) {
            const randomIndex = Math.floor(Math.random() * categoryImages.length);
            return categoryImages[randomIndex];
        }
        return null; // Return null if category is not found or has no images
    }

    // Method to get all images from a specified category
    getAllImages(category = 'carousels') {
        return this.images[category] || []; // Return an empty array if category not found
    }

    // Method to get all images from a specified category
    getAllCarouselImages() {
        return this.images['carousels'] || []; // Return an empty array if category not found
    }

    // Method to get all images from a specified category
    getAllGalaxialImages() {
        return this.images['galaxies'] || []; // Return an empty array if category not found
    }
}

export default ImageUtils;
