import { MapPin } from 'lucide-react';

const ProjectShowcase = ({ project, imageOnLeft = true }) => {
  return (
    <section className={`relative w-full min-h-[600px] md:min-h-[700px] flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Full-page Image */}
      <div className="w-full md:w-[65%] h-[400px] md:h-auto relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        {/* Optional overlay gradient for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/20" 
             style={{ 
               background: imageOnLeft 
                 ? 'linear-gradient(to right, transparent, rgba(0,0,0,0.1))' 
                 : 'linear-gradient(to left, transparent, rgba(0,0,0,0.1))'
             }}
        />
      </div>

      {/* Callout Box */}
      <div className="w-full md:w-[35%] bg-white flex items-center justify-center p-8 md:p-12">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            {project.name}
          </h2>
          
          {project.location && (
            <div className="flex items-center gap-2 mb-6 text-gray-600">
              <MapPin className="h-5 w-5 text-accent-red flex-shrink-0" />
              <span className="text-lg">{project.location}</span>
            </div>
          )}
          
          {project.description && (
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              {project.description}
            </p>
          )}

          {project.dollarAmount && (
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Project Value</span>
              <p className="text-xl font-bold text-text-dark">{project.dollarAmount}</p>
            </div>
          )}

          {project.squareFootage && (
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Square Footage</span>
              <p className="text-xl font-bold text-text-dark">{project.squareFootage}</p>
            </div>
          )}

          {project.scope && (
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Scope</span>
              <p className="text-lg text-gray-700">{project.scope}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
