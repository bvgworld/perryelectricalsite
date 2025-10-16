import { useState, useEffect } from 'react';
import { Check, Star, Save, X } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import { useFeaturedProjects } from '../../hooks/useFeaturedProjects';
import Button from '../ui/Button';
import Card from '../ui/Card';

const FeaturedProjectsSelector = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { featuredProjectIds, updateFeaturedProjects, loading: featuredLoading } = useFeaturedProjects();
  const [selectedIds, setSelectedIds] = useState([]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setSelectedIds(featuredProjectIds);
  }, [featuredProjectIds]);

  const handleProjectToggle = (projectId) => {
    setSelectedIds(prev => {
      if (prev.includes(projectId)) {
        // Remove project
        return prev.filter(id => id !== projectId);
      } else if (prev.length < 3) {
        // Add project (max 3)
        return [...prev, projectId];
      }
      return prev; // Don't add if already at max
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    
    const result = await updateFeaturedProjects(selectedIds);
    
    if (result.success) {
      setMessage('Featured projects updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage(`Error: ${result.error}`);
    }
    
    setSaving(false);
  };

  const handleClear = () => {
    setSelectedIds([]);
  };

  if (projectsLoading || featuredLoading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-gray-900 flex items-center">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            Featured Projects
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Select up to 3 projects to display on the home page
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {selectedIds.length}/3 selected
          </span>
        </div>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-md ${
          message.includes('Error') 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {projects.map((project) => {
          const isSelected = selectedIds.includes(project.id);
          const canSelect = !isSelected && selectedIds.length < 3;
          
          return (
            <div
              key={project.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                isSelected
                  ? 'border-primary-blue bg-blue-50'
                  : canSelect
                  ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
              }`}
              onClick={() => handleProjectToggle(project.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-primary-blue bg-primary-blue'
                      : 'border-gray-300'
                  }`}>
                    {isSelected && <Check className="h-4 w-4 text-white" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900">
                        {project.description?.substring(0, 50)}...
                      </h4>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {project.projectType}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.projectSize} • {project.projectLength}
                    </p>
                  </div>
                </div>
                
                {isSelected && (
                  <div className="flex items-center text-primary-blue">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No projects available. Create some projects first.</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t">
        <Button
          variant="outline"
          onClick={handleClear}
          disabled={selectedIds.length === 0 || saving}
        >
          <X className="h-4 w-4 mr-2" />
          Clear All
        </Button>
        
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={saving}
        >
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save Featured Projects'}
        </Button>
      </div>
    </Card>
  );
};

export default FeaturedProjectsSelector;
