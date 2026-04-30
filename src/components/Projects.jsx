import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Moderno',
      description:
        'Plataforma de tienda online con carrito de compras, gestión de inventario y integración de pagos. Incluye dashboard administrativo y análisis de ventas en tiempo real.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      demo: '#',
      code: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Gestor de Tareas Colaborativo',
      description:
        'Aplicación web para gestión de proyectos en equipo. Incluye asignación de tareas, seguimiento de progreso, notificaciones en tiempo real y comunicación integrada.',
      technologies: ['React', 'Firebase', 'WebSocket', 'Tailwind CSS', 'Redux'],
      demo: '#',
      code: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Red Social para Viajeros',
      description:
        'Plataforma social donde viajeros comparten experiencias, rutas y recomendaciones. Con geolocalización, mapas interactivos y sistema de conexiones entre usuarios.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Mapbox', 'GraphQL'],
      demo: '#',
      code: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Aquí te muestro algunos de mis mejores trabajos y proyectos personales que demuestran mis habilidades.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Header Gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-black transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>

                  <motion.a
                    href={project.code}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github size={16} />
                    Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
