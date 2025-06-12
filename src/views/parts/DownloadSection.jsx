import React, { useState, useEffect } from 'react';
import {
  ArrowDownTrayIcon,
  EllipsisVerticalIcon,
  DocumentIcon,
  DocumentTextIcon,
  DocumentChartBarIcon,
  PhotoIcon,
  ArchiveBoxIcon,
  TrashIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const DownloadSection = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockFiles = [
      { id: 1, name: 'Project_Report.pdf', type: 'pdf', size: 2456789, uploadDate: '2023-05-15' },
      { id: 2, name: 'Financials.xlsx', type: 'excel', size: 1894567, uploadDate: '2023-06-20' },
      { id: 3, name: 'Meeting_Notes.docx', type: 'word', size: 987654, uploadDate: '2023-07-10' },
      { id: 4, name: 'Screenshot.png', type: 'image', size: 3456789, uploadDate: '2023-08-05' },
      { id: 5, name: 'Archive.zip', type: 'zip', size: 56789012, uploadDate: '2023-09-12' },
    ];
    
    setTimeout(() => {
      setFiles(mockFiles);
      setLoading(false);
    }, 800);
  }, []);

  const handleDownload = (fileId, fileName) => {
    console.log(`Downloading file ${fileId}`);
    alert(`Downloading ${fileName}`);
  };

  const handleDelete = (fileId) => {
    console.log(`Deleting file ${fileId}`);
    alert(`File ${fileId} will be deleted`);
    setMenuOpen(null);
  };

  const handleShare = (fileId) => {
    console.log(`Sharing file ${fileId}`);
    alert(`Sharing file ${fileId}`);
    setMenuOpen(null);
  };

  const toggleMenu = (fileId) => {
    setMenuOpen(menuOpen === fileId ? null : fileId);
  };

  const getFileIcon = (fileType) => {
    switch(fileType.toLowerCase()) {
      case 'pdf':
        return <DocumentTextIcon className="h-8 w-8 text-red-500" />;
      case 'excel':
      case 'xlsx':
      case 'csv':
        return <DocumentChartBarIcon className="h-8 w-8 text-green-600" />;
      case 'word':
      case 'docx':
      case 'doc':
        return <DocumentTextIcon className="h-8 w-8 text-blue-500" />;
      case 'image':
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
        return <PhotoIcon className="h-8 w-8 text-amber-500" />;
      case 'zip':
      case 'rar':
      case '7z':
        return <ArchiveBoxIcon className="h-8 w-8 text-gray-500" />;
      default:
        return <DocumentIcon className="h-8 w-8 text-gray-400" />;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="container mx-auto px-30 py-8 ">
      <h2 className="text-4xl text-center font-bold mb-14 mt-8 text-gray-800">Téléchargez vos fiches et boostez vos révisions !</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file) => (
            <div key={file.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 truncate max-w-[180px]">{file.name}</h3>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)} • {file.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDownload(file.id, file.name)}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      title="Download"
                    >
                      <ArrowDownTrayIcon className="h-5 w-5" />
                    </button>
                    
                    <div className="relative">
                      <button
                        onClick={() => toggleMenu(file.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        title="More options"
                      >
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>
                      
                      {menuOpen === file.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <div className="py-1">
                            <button
                              onClick={() => handleShare(file.id)}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              <ShareIcon className="h-4 w-4 mr-2" />
                              Share
                            </button>
                            <button
                              onClick={() => handleDelete(file.id)}
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                            >
                              <TrashIcon className="h-4 w-4 mr-2" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                  <span>Uploaded {new Date(file.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DownloadSection;