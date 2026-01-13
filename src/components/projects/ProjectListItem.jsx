import { MapPin, DollarSign, Maximize2, Briefcase } from 'lucide-react';

const ProjectListItem = ({ project }) => {
  return (
    <div className="flex flex-col gap-6 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
      {/* Thumbnail */}
      <div className="w-full">
        <img
          src={project.projectImage || 'https://via.placeholder.com/400x300/1A73AA/ffffff?text=No+Image'}
          alt={project.projectName || 'Project'}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        {/* Project Name */}
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-dark mb-3">
          {project.projectName || 'Unnamed Project'}
        </h3>

        {/* Project Debrief */}
        {project.description && (
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description}
          </p>
        )}

        {/* Project Size Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {project.dollarAmount && (
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign size={18} className="text-accent-red flex-shrink-0" />
              <span className="text-sm font-medium">{project.dollarAmount}</span>
            </div>
          )}
          
          {project.squareFootage && (
            <div className="flex items-center gap-2 text-gray-600">
              <Maximize2 size={18} className="text-primary-blue flex-shrink-0" />
              <span className="text-sm font-medium">{project.squareFootage}</span>
            </div>
          )}
          
          {project.scope && (
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase size={18} className="text-accent-dark flex-shrink-0" />
              <span className="text-sm font-medium">{project.scope}</span>
            </div>
          )}

          {project.location && (
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-red-500 flex-shrink-0" />
              <span className="text-sm font-medium">{project.location}</span>
            </div>
          )}
        </div>

        {/* Project Type Badge */}
        {project.projectType && (
          <div className="inline-block">
            <span className="px-3 py-1 text-xs font-semibold bg-accent-red/10 text-accent-red rounded-full">
              {project.projectType}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectListItem;


