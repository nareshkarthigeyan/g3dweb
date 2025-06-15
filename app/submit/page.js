'use client'
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Submit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    description: '',
    material: 'pla',
    color: '',
    quantity: 1,
    resolution: 'standard',
    notes: ''
  });
  
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      // Check file type (common 3D file formats)
      const validTypes = ['model/stl', 'model/obj', 'model/gltf-binary', 'model/gltf+json', 'application/octet-stream'];
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      const valid3DExtensions = ['stl', 'obj', 'gltf', 'glb', '3mf', 'fbx', 'step', 'stp'];
      
      if (validTypes.includes(selectedFile.type) || valid3DExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setFileError('');
      } else {
        setFile(null);
        setFileError('Please upload a valid 3D model file (STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, STP)');
      }
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setFileError('Please upload a 3D model file');
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, you would upload the file to a server here
    // For this demo, we'll simulate a successful upload after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectName: '',
          description: '',
          material: 'pla',
          color: '',
          quantity: 1,
          resolution: 'standard',
          notes: ''
        });
        setFile(null);
        setSubmitSuccess(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 5000);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-dark-200 text-white pt-24 pb-20">
      {/* Header with 3D elements */}
      <div className="container mx-auto px-6 mb-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 bg-dark-300 rounded-full py-1 px-3 mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium">3D Printing Service</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 relative">
            Submit Your <span className="text-primary">3D Files</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Upload your 3D models and we'll bring them to life with our professional 3D printing services.
            Fill out the form below with your project details and specifications.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-dark-100 p-8 rounded-xl shadow-lg border border-dark-300">
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>
              
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Submission Successful!</h3>
                  <p className="text-gray-300 mb-4">We've received your 3D printing request and will review it shortly.</p>
                  <p className="text-gray-400">You'll receive a confirmation email with next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  {/* Project Information */}
                  <div className="space-y-6 pt-4 border-t border-dark-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Project Information</h3>
                    <div>
                      <label htmlFor="projectName" className="block text-sm font-medium text-gray-400 mb-2">Project Name *</label>
                      <input 
                        type="text" 
                        id="projectName" 
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="My Awesome 3D Project"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Project Description *</label>
                      <textarea 
                        id="description" 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows="3" 
                        className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Describe your project and any specific requirements..."
                      ></textarea>
                    </div>
                    
                    {/* File Upload */}
                    <div className="space-y-2">
                      <label htmlFor="file" className="block text-sm font-medium text-gray-400 mb-2">Upload 3D Model File *</label>
                      <div className="relative">
                        <input 
                          type="file" 
                          id="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden" 
                          accept=".stl,.obj,.gltf,.glb,.3mf,.fbx,.step,.stp,application/octet-stream"
                        />
                        <div 
                          onClick={() => fileInputRef.current.click()}
                          className="w-full bg-dark-200 border-2 border-dashed border-dark-300 rounded-md py-8 px-4 text-center cursor-pointer hover:border-primary transition duration-300"
                        >
                          <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="text-gray-400 mb-1">
                            {file ? file.name : 'Drag and drop your file here, or click to browse'}
                          </p>
                          <p className="text-xs text-gray-500">
                            Supported formats: STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, STP
                          </p>
                        </div>
                      </div>
                      {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
                      {file && <p className="text-green-500 text-sm mt-1">File selected: {file.name}</p>}
                    </div>
                  </div>
                  
                  {/* Printing Specifications */}
                  <div className="space-y-6 pt-4 border-t border-dark-300">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Printing Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="material" className="block text-sm font-medium text-gray-400 mb-2">Material *</label>
                        <select 
                          id="material" 
                          name="material"
                          value={formData.material}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="pla">PLA</option>
                          <option value="abs">ABS</option>
                          <option value="petg">PETG</option>
                          <option value="nylon">Nylon</option>
                          <option value="tpu">TPU (Flexible)</option>
                          <option value="resin">Resin</option>
                          <option value="metal">Metal</option>
                          <option value="carbon">Carbon Fiber</option>
                          <option value="other">Other (specify in notes)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="color" className="block text-sm font-medium text-gray-400 mb-2">Color Preference</label>
                        <input 
                          type="text" 
                          id="color" 
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g., Black, Red, Natural"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-2">Quantity *</label>
                        <input 
                          type="number" 
                          id="quantity" 
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                          min="1"
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="resolution" className="block text-sm font-medium text-gray-400 mb-2">Print Resolution *</label>
                        <select 
                          id="resolution" 
                          name="resolution"
                          value={formData.resolution}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="draft">Draft (0.3mm layer height)</option>
                          <option value="standard">Standard (0.2mm layer height)</option>
                          <option value="high">High (0.1mm layer height)</option>
                          <option value="ultra">Ultra (0.05mm layer height)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-400 mb-2">Additional Notes</label>
                      <textarea 
                        id="notes" 
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3" 
                        className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Any additional information or special requirements..."
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-md transition duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Submit 3D Printing Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          {/* Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-dark-100 p-8 rounded-xl shadow-lg border border-dark-300 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Submit Your 3D Model</h3>
                    <p className="text-gray-400 text-sm">Upload your 3D model file and provide project details through our secure form.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Receive a Quote</h3>
                    <p className="text-gray-400 text-sm">Our team will review your project and provide a detailed quote within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Approve and Pay</h3>
                    <p className="text-gray-400 text-sm">Review the quote, make any necessary adjustments, and proceed with payment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Production & Delivery</h3>
                    <p className="text-gray-400 text-sm">We'll print your model with precision and ship it directly to your doorstep.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-dark-300">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <p className="text-gray-400 text-sm mb-4">Have questions about file formats, materials, or the printing process?</p>
                <Link href="/contact" className="block text-center bg-dark-300 hover:bg-dark-400 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-dark-100 p-6 rounded-xl border border-dark-300">
            <h3 className="text-xl font-bold mb-3">What file formats do you accept?</h3>
            <p className="text-gray-400">We accept most common 3D file formats including STL, OBJ, GLTF, GLB, 3MF, FBX, STEP, and STP. If you have a different format, please contact us.</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-xl border border-dark-300">
            <h3 className="text-xl font-bold mb-3">How long does 3D printing take?</h3>
            <p className="text-gray-400">Turnaround time depends on project complexity, size, and material. Simple projects can be completed in 1-3 days, while complex projects may take 5-10 business days.</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-xl border border-dark-300">
            <h3 className="text-xl font-bold mb-3">What materials can you print with?</h3>
            <p className="text-gray-400">We offer a wide range of materials including various plastics (PLA, ABS, PETG, Nylon, TPU), resins, metals, and composite materials like carbon fiber.</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-xl border border-dark-300">
            <h3 className="text-xl font-bold mb-3">Do you offer design services?</h3>
            <p className="text-gray-400">Yes! If you don't have a 3D model ready, our design team can help create one based on your specifications. Contact us for design service rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}