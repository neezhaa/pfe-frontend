import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpTrayIcon, DocumentIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function UploadSection() {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = useCallback((newFiles) => {
    const validFiles = newFiles.filter(file => 
      file.type === 'application/pdf' || 
      file.type === 'application/msword' ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    );
    
    if (validFiles.length !== newFiles.length) {
      alert(t('upload.invalidFileType'));
    }

    setFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Limit to 5 files
  }, [t]);

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsSuccess(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0 || !category) {
      alert(t('upload.fillAllFields'));
      return;
    }
    simulateUpload();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-4 sm:px-6 lg:px-8" id="upload">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{t('upload.title')}</h2>
          <p className="mt-2 text-lg text-gray-600">{t('upload.subtitle')}</p>
        </div>

        {isSuccess ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-gray-900">{t('upload.successTitle')}</h3>
            <p className="mt-2 text-gray-600">{t('upload.successMessage')}</p>
            <button
              onClick={() => {
                setFiles([]);
                setCategory('');
                setIsSuccess(false);
              }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('upload.uploadAnother')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
              }`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <ArrowUpTrayIcon className="h-12 w-12 mx-auto text-gray-400" />
              <div className="mt-4 flex justify-center text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>{t('upload.clickToUpload')}</span>
                  <input 
                    id="file-upload" 
                    name="file-upload" 
                    type="file" 
                    className="sr-only" 
                    multiple
                    onChange={handleFileInput}
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                <p className="pl-1">{t('upload.orDragDrop')}</p>
              </div>
              <p className="text-xs text-gray-500 mt-2">{t('upload.fileTypes')}</p>
            </div>

            {files.length > 0 && (
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{t('upload.selectedFiles')}</h3>
                <ul className="divide-y divide-gray-200">
                  {files.map((file, index) => (
                    <li key={index} className="py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <DocumentIcon className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-sm font-medium text-gray-900 truncate max-w-xs">{file.name}</span>
                        <span className="text-xs text-gray-500 ml-2">({(file.size / 1024).toFixed(1)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-2">{t('upload.maxFiles', { count: 5 - files.length })}</p>
              </div>
            )}

            {isUploading && (
              <div className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{t('upload.uploading')}</span>
                  <span className="text-sm font-medium text-gray-700">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isUploading}
                className={`px-6 py-3 rounded-md text-white font-medium ${
                  isUploading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}
              >
                {isUploading ? t('upload.uploading') : t('upload.submit')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UploadSection;