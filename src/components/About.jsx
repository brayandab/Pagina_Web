import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL'] },
    { category: 'Herramientas', items: ['Git', 'Figma', 'Vite', 'Docker', 'AWS', 'Vercel'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Conoce más sobre mi experiencia, habilidades y lo que me apasiona del desarrollo web.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Mi Historia</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Soy un desarrollador web apasionado con más de 5 años de experiencia creando soluciones digitales innovadoras. 
                Mi viaje en el desarrollo comenzó con curiosidad y se transformó en una carrera gratificante.
              </p>
              <p>
                Especializado en crear aplicaciones web modernas y responsivas usando las últimas tecnologías. 
                Me encanta trabajar con React, Node.js y todo lo relacionado con el ecosistema de JavaScript.
              </p>
              <p>
                Soy un aprendiz continuo, siempre buscando mejorar mis habilidades y mantenerme actualizado con las tendencias 
                tecnológicas más recientes. Creo que la calidad del código y la experiencia del usuario son fundamentales.
              </p>
              <p>
                Cuando no estoy programando, disfruto contribuyendo a proyectos de código abierto, escribiendo sobre tecnología 
                y mentorando a nuevos desarrolladores.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '50+', label: 'Proyectos Completados' },
              { number: '30+', label: 'Clientes Satisfechos' },
              { number: '5+', label: 'Años de Experiencia' },
              { number: '100%', label: 'Dedicación' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Habilidades Técnicas</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
