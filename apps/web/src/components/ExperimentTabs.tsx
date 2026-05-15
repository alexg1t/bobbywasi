'use client';

import { useState } from 'react';
import type { Experiment } from '@stem-lab/shared';

type TabId = 'descripcion' | 'seguridad' | 'materiales' | 'instrucciones' | 'ciencia' | 'extras';

interface ExperimentTabsProps {
  experiment: any;
  allMaterials: any[];
}

export function ExperimentTabs({ experiment, allMaterials }: ExperimentTabsProps) {
  // Get safety warnings from either warnings or safetyNotes
  const safetyWarnings = experiment.safety?.warnings || experiment.safety?.safetyNotes || [];
  const supervisionRequired = experiment.safety?.supervisionRequired || experiment.safety?.requiresAdultSupervision || false;
  
  // Get instructions - handle both structures
  const preparationSteps = experiment.instructions?.preparation?.steps || experiment.instructions?.preparation || [];
  const executionSteps = experiment.instructions?.execution?.steps || experiment.instructions?.execution || [];
  const cleanupSteps = experiment.instructions?.cleanup?.steps || experiment.instructions?.cleanup || [];
  const [activeTab, setActiveTab] = useState<TabId>('descripcion');

  const tabs = [
    { id: 'descripcion' as TabId, label: '📖 Descripción', emoji: '📖' },
    { id: 'seguridad' as TabId, label: '🛡️ Seguridad', emoji: '🛡️' },
    { id: 'materiales' as TabId, label: '🛒 Materiales', emoji: '🛒' },
    { id: 'instrucciones' as TabId, label: '📝 Pasos', emoji: '📝' },
    { id: 'ciencia' as TabId, label: '🔬 Ciencia', emoji: '🔬' },
    { id: 'extras' as TabId, label: '🎨 Extras', emoji: '🎨' },
  ];

  return (
    <>
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden border-4 border-purple-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[120px] px-4 py-4 font-bold text-sm md:text-base transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
              style={{ fontFamily: 'var(--font-baloo)' }}
            >
              <span className="block text-2xl mb-1">{tab.emoji}</span>
              <span className="hidden md:inline">{tab.label.split(' ')[1]}</span>
              <span className="md:hidden">{tab.label.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-4 border-purple-200 min-h-[400px]">
        {/* Descripción Tab */}
        {activeTab === 'descripcion' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              📖 ¿De qué trata este experimento?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {experiment.metadata?.description}
            </p>
          </div>
        )}

        {/* Seguridad Tab */}
        {activeTab === 'seguridad' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              🛡️ Información de Seguridad
            </h2>
            
            {supervisionRequired && (
              <div className="bg-yellow-100 border-4 border-yellow-400 rounded-2xl p-5 mb-6">
                <p className="text-lg md:text-xl font-bold text-yellow-800 flex items-center gap-3">
                  ⚠️ Este experimento requiere supervisión de un adulto
                </p>
              </div>
            )}

            {safetyWarnings && safetyWarnings.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                  Notas de Seguridad:
                </h3>
                <ul className="space-y-3">
                  {safetyWarnings.map((note: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-base md:text-lg text-gray-700 bg-red-50 rounded-xl p-4 shadow-md border-2 border-red-200">
                      <span className="text-2xl">✓</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(!safetyWarnings || safetyWarnings.length === 0) && !supervisionRequired && (
              <div className="bg-green-100 border-4 border-green-400 rounded-2xl p-6">
                <p className="text-lg md:text-xl font-bold text-green-800 flex items-center gap-3">
                  ✅ ¡Este experimento es completamente seguro! Puedes hacerlo solo.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Materiales Tab */}
        {activeTab === 'materiales' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              🛒 Materiales Necesarios
            </h2>
            
            {allMaterials.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {allMaterials.map((material: any, index: number) => (
                    <div key={index} className="bg-blue-50 rounded-2xl p-5 shadow-md border-2 border-blue-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">📦</span>
                        <div className="flex-1">
                          <p className="font-bold text-lg text-gray-900">{material.name}</p>
                          <p className="text-gray-600 text-base">
                            {material.quantity} {material.unit === 'piece' || material.unit === 'pieces' ? 'unidad(es)' : material.unit}
                          </p>
                          {material.notes && (
                            <p className="text-gray-500 text-sm mt-1 italic">{material.notes}</p>
                          )}
                          {material.specifications && (
                            <p className="text-gray-500 text-sm mt-1">{material.specifications}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {experiment.materials?.optional && experiment.materials.optional.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                      Materiales Opcionales:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiment.materials.optional.map((material: any, index: number) => (
                        <div key={index} className="bg-blue-50/50 rounded-2xl p-4 shadow-md border-2 border-blue-100">
                          <div className="flex items-start gap-3">
                            <span className="text-3xl">✨</span>
                            <div className="flex-1">
                              <p className="font-bold text-lg text-gray-900">{material.name}</p>
                              <p className="text-gray-600 text-sm">{material.purpose || material.notes}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </>
            ) : (
              <p className="text-lg text-gray-600">No se especificaron materiales para este experimento.</p>
            )}
          </div>
        )}

        {/* Instrucciones Tab */}
        {activeTab === 'instrucciones' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              📝 Instrucciones Paso a Paso
            </h2>

            {preparationSteps && preparationSteps.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                  🔧 Preparación
                </h3>
                <div className="space-y-4">
                  {preparationSteps.map((step: any, index: number) => {
                    const stepText = typeof step === 'string' ? step : (step.action || step.description || step.title);
                    const stepDetails = typeof step === 'object' ? step.details || step.description : null;
                    const stepDuration = typeof step === 'object' ? step.duration : null;
                    const stepWarnings = typeof step === 'object' ? step.warnings || step.safetyNote : null;
                    
                    return (
                      <div key={index} className="bg-green-50 rounded-2xl p-5 shadow-md border-2 border-green-200">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {typeof step === 'object' ? (step.stepNumber || step.step || index + 1) : index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-base md:text-lg text-gray-900 font-bold mb-2">{stepText}</p>
                            {stepDetails && (
                              <p className="text-gray-700 text-sm md:text-base mb-2">{stepDetails}</p>
                            )}
                            {stepDuration && (
                              <p className="text-purple-600 font-semibold mt-2">⏱️ {stepDuration}</p>
                            )}
                            {stepWarnings && (
                              <div className="mt-3 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-3">
                                <p className="font-bold text-yellow-800 text-sm mb-1">⚠️ Nota de Seguridad:</p>
                                <p className="text-yellow-700 text-sm">{Array.isArray(stepWarnings) ? stepWarnings.join(', ') : stepWarnings}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {executionSteps && executionSteps.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                  🚀 Ejecución
                </h3>
                <div className="space-y-4">
                  {executionSteps.map((step: any, index: number) => {
                    const stepTitle = typeof step === 'string' ? step : (step.title || step.action);
                    const stepDescription = typeof step === 'object' ? (step.description || step.details) : null;
                    const stepDuration = typeof step === 'object' ? step.duration : null;
                    const stepWarnings = typeof step === 'object' ? step.warnings || step.safetyNote : null;
                    
                    return (
                      <div key={index} className="bg-green-50 rounded-2xl p-6 shadow-md border-2 border-green-200">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {typeof step === 'object' ? (step.stepNumber || step.step || index + 1) : index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{stepTitle}</h4>
                            {stepDescription && (
                              <p className="text-base md:text-lg text-gray-700 mb-3">{stepDescription}</p>
                            )}
                            {stepDuration && (
                              <p className="text-purple-600 font-semibold">⏱️ Duración: {stepDuration}</p>
                            )}
                            {stepWarnings && (
                              <div className="mt-3 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-3">
                                <p className="font-bold text-yellow-800 mb-1">⚠️ Nota de Seguridad:</p>
                                <p className="text-yellow-700">{Array.isArray(stepWarnings) ? stepWarnings.join(', ') : stepWarnings}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {cleanupSteps && cleanupSteps.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                  🧹 Limpieza
                </h3>
                <div className="space-y-4">
                  {cleanupSteps.map((step: any, index: number) => {
                    const stepText = typeof step === 'string' ? step : (step.action || step.description || step);
                    
                    return (
                      <div key={index} className="bg-green-50 rounded-2xl p-5 shadow-md border-2 border-green-200">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {typeof step === 'object' ? (step.step || index + 1) : index + 1}
                          </div>
                          <p className="text-base md:text-lg text-gray-700 flex-1">{stepText}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {(!preparationSteps || preparationSteps.length === 0) &&
             (!executionSteps || executionSteps.length === 0) &&
             (!cleanupSteps || cleanupSteps.length === 0) && (
              <p className="text-lg text-gray-600">No se especificaron instrucciones para este experimento.</p>
            )}
          </div>
        )}

        {/* Ciencia Tab */}
        {activeTab === 'ciencia' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              🔬 ¿Qué Ciencia Hay Detrás?
            </h2>

            {experiment.science ? (
              <>
                {experiment.science.principle && (
                  <div className="bg-purple-50 rounded-2xl p-6 shadow-md border-2 border-purple-200 mb-6">
                    <h3 className="text-2xl font-bold text-purple-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
                      💡 Principio Científico
                    </h3>
                    <p className="text-lg md:text-xl text-gray-900 font-semibold">{experiment.science.principle}</p>
                  </div>
                )}

                {experiment.science.explanation && (
                  <div className="space-y-4 mb-6">
                    {typeof experiment.science.explanation === 'string' ? (
                      <div className="bg-purple-50 rounded-2xl p-6 shadow-md border-2 border-purple-200">
                        <h3 className="text-2xl font-bold text-purple-700 mb-3" style={{ fontFamily: 'var(--font-baloo)' }}>
                          📚 Explicación
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">{experiment.science.explanation}</p>
                      </div>
                    ) : (
                      <>
                        {experiment.science.explanation.simple && (
                          <div className="bg-purple-50 rounded-2xl p-6 shadow-md border-2 border-purple-200">
                            <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                              😊 Explicación Simple
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{experiment.science.explanation.simple}</p>
                          </div>
                        )}
                        {experiment.science.explanation.detailed && (
                          <div className="bg-purple-50 rounded-2xl p-6 shadow-md border-2 border-purple-200">
                            <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                              🤓 Explicación Detallada
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{experiment.science.explanation.detailed}</p>
                          </div>
                        )}
                        {experiment.science.explanation.technical && (
                          <div className="bg-indigo-50 rounded-2xl p-6 shadow-md border-2 border-indigo-200">
                            <h3 className="text-2xl font-bold text-indigo-700 mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                              🎓 Explicación Técnica
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{experiment.science.explanation.technical}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {experiment.science.concepts && experiment.science.concepts.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-purple-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                      🎓 Conceptos Clave:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiment.science.concepts.map((concept: any, index: number) => (
                        <div key={index} className="bg-purple-50 rounded-xl p-4 shadow-md border-2 border-purple-100">
                          <h4 className="font-bold text-lg text-purple-700 mb-2">{concept.name}</h4>
                          <p className="text-gray-700">{concept.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experiment.science.realWorldApplications && experiment.science.realWorldApplications.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                      🌍 Aplicaciones en el Mundo Real:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experiment.science.realWorldApplications.map((app: string, index: number) => (
                        <div key={index} className="bg-purple-50 rounded-xl p-4 shadow-md border-2 border-purple-100 flex items-start gap-3">
                          <span className="text-2xl">🎯</span>
                          <p className="text-gray-700 font-medium">{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-lg text-gray-600">No se especificó información científica para este experimento.</p>
            )}
          </div>
        )}

        {/* Extras Tab */}
        {activeTab === 'extras' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-baloo)' }}>
              🎨 ¡Lleva tu Experimento Más Allá!
            </h2>

            {/* Share Your Experiment Section */}
            <div className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-baloo)' }}>
                📹 ¡Comparte tu Experimento!
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                ¿Hiciste este experimento? ¡Nos encantaría ver tu proceso y resultados! Comparte tu experiencia con la comunidad BobbyWasi.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100">
                  <p className="font-bold text-purple-700 mb-2">🎥 Graba un video</p>
                  <p className="text-gray-600 text-sm">
                    Usa YouTube, Loom, o cualquier plataforma de video para mostrar tu experimento paso a paso.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100">
                  <p className="font-bold text-purple-700 mb-2">📸 Toma fotos</p>
                  <p className="text-gray-600 text-sm">
                    Captura los momentos más importantes: preparación, ejecución y resultados.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-100">
                  <p className="font-bold text-purple-700 mb-2">✍️ Cuenta tu experiencia</p>
                  <p className="text-gray-600 text-sm">
                    ¿Qué aprendiste? ¿Qué fue lo más divertido? ¿Tuviste algún desafío?
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-4 text-white text-center">
                <p className="font-bold text-lg mb-2">🌟 Inspira a otros científicos</p>
                <p className="text-sm">
                  Tu video puede motivar a otros niños a experimentar y aprender. ¡Sé parte de la comunidad científica!
                </p>
              </div>
            </div>

            {/* Variations and Challenges */}
            {experiment.extensions && (experiment.extensions.variations?.length > 0 || experiment.extensions.challenges?.length > 0) && (
              <>
                {experiment.extensions.variations && experiment.extensions.variations.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                      ✨ Variaciones:
                    </h3>
                    <ul className="space-y-3">
                      {experiment.extensions.variations.map((variation: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 shadow-md border-2 border-orange-100">
                          <span className="text-2xl">🔄</span>
                          <span className="text-base md:text-lg text-gray-700">{variation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {experiment.extensions.challenges && experiment.extensions.challenges.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-orange-700 mb-4" style={{ fontFamily: 'var(--font-baloo)' }}>
                      🏆 Desafíos:
                    </h3>
                    <ul className="space-y-3">
                      {experiment.extensions.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 shadow-md border-2 border-orange-100">
                          <span className="text-2xl">🎯</span>
                          <span className="text-base md:text-lg text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// Made with Bob
