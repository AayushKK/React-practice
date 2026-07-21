const data = {
  "projects": [
    {
      "title": "Ecommerce Platform",
      "stack": "MERN (MongoDB , Express, React, Node.js)",
      "liveLink": "https://e-commerce-front-sage.vercel.app/",
      "gitRepo": "https://github.com/AayushKK/E-commerce-Front",
      "projectImage": "/Ecommerce-Preview.png",
      "technologies": {
        "frontend": [
          "React",
          "React DOM",
          "React Router",
          "React Router DOM",
          "Redux Toolkit",
          "React Redux",
          "Redux Toolkit Query",
          "Axios",
          "Formik",
          "Yup",
          "React Toastify",
          "React Icons",
          "@heroicons/react",
          "@material-tailwind/react",
          "@faker-js/faker",
          "js-cookie"
        ],
        "backend": [
          "Node.js",
          "Express.js",
          "MongoDB Atlas",
          "Mongoose",
          "JWT (jsonwebtoken)",
          "bcrypt",
          "Multer",
          "Cloudinary",
          "express-fileupload",
          "joi",
          "express-joi-validation",
          "uuid",
          "dotenv",
          "morgan",
          "cors"
        ]
      },
      "highlights": [
        "Built a full-stack eCommerce application using MERN with Redux Toolkit for scalable state management.",
        "Implemented secure user authentication and role-based authorization with JWT and bcrypt.",
        "Developed CRUD functionality, product search & filtering, image uploads, and order management.",
        "Deployed frontend on Vercel and backend on Render with MongoDB Atlas as the cloud database."
      ]
    },
    {
      "title": "Job Tracker",
      "stack": "React, Next.js, TypeScript, Node.js, Express, PostgreSQL (Neon)",
      "liveLink": "https://mini-job-tracker-frontend.vercel.app/",
      "gitRepo": "https://github.com/AayushKK/Mini-Job-Tracker-Backend",
      "projectImage": "/vite.svg",
      "technologies": {
        "frontend": [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "React Hook Form",
          "Zod"
        ],
        "backend": [
          "Node.js",
          "Express.js",
          "PostgreSQL (Neon)",
          "MVC Architecture",
          "REST API",
          "UUID",
          "Database Migrations",
          "Jest",
          "Supertest"
        ]
      },
      "highlights": [
        "Built a full-stack job tracking application with a RESTful API backend and responsive Next.js frontend.",
        "Designed a PostgreSQL database schema using UUID primary keys, enums, and database triggers for auto-updated timestamps.",
        "Implemented complete CRUD functionality with search and filtering by application status (Applied, Interviewing, Offer, Rejected).",
        "Developed an MVC architecture with custom error handling, input validation, and data sanitization for robust backend management.",
        "Created a modern dashboard with statistics, detailed views, and forms using React Hook Form and Zod.",
        "Wrote comprehensive unit and integration tests using Jest and Supertest to ensure backend reliability.",
        "Managed database schema changes with migrations and deployed the frontend on Vercel and backend on Render."
      ]
    },
    {
      "title": "Blog App",
      "stack": "Next.js",
      "liveLink": "https://nextjs-blue-one-29.vercel.app/",
      "gitRepo": "https://github.com/AayushKK/Nextjs",
      "projectImage": "/Blog-App.png",
      "technologies": {
        "frontend": [
          "Next.js",
          "Formik",
          "Yup",
          "Tailwind CSS"
        ],
        "backend": [
          "MockAPI"
        ]
      },
      "highlights": [
        "Developed a full-stack blog application using Next.js with dynamic routing and responsive UI.",
        "Built CRUD operations for blog posts, enabling users to create, edit, and view content seamlessly.",
        "Integrated Formik and Yup for form handling and validation, ensuring data integrity.",
        "Used MockAPI as a backend service for storing and retrieving posts."
      ]
    },
    {
      "title": "Task Manager",
      "stack": "Laravel",
      "gitRepo": "https://github.com/AayushKK/Task-Manager",
      "projectImage": "/TaskManager-Preview.png",
      "technologies": {
        "frontend": [
          "Blade"
        ],
        "backend": [
          "Laravel",
          "PHP",
          "MySQL",
          "Eloquent ORM"
        ]
      },
      "highlights": [
        "Built a simple task management application using the Laravel framework.",
        "Implemented full CRUD functionality for creating, viewing, updating, and deleting tasks.",
        "Used Eloquent ORM for database interactions and Blade templating for the UI."
      ]
    },
    {
      "title": "Segmentation of Brain Tumors in MRI using Hybrid CNNs",
      "stack": "TensorFlow, Keras",
      "gitRepo": "https://github.com/AayushKK/Tumor-Segmentation",
      "projectImage": "/unet-test1.png",
      "technologies": {
        "frontend": [],
        "backend": [
          "TensorFlow",
          "Keras",
          "NumPy",
          "Pandas",
          "Matplotlib"
        ]
      },
      "highlights": [
        "Conducted comparative study of U-Net and hybrid CNN models (Seg-U-Net) for brain tumor segmentation.",
        "Designed deep learning pipelines for MRI preprocessing, feature extraction, and segmentation.",
        "Improved segmentation accuracy by experimenting with hybrid architectures.",
        "Evaluated model performance with Dice coefficient, IoU, and accuracy."
      ]
    }
  ]
};

export default data;

