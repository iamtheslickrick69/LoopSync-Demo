import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Key, Check, AlertCircle } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { useSettingsStore } from '../../../store/portalStore';

export function SettingsPage() {
  const { claudeApiKey, setClaudeApiKey } = useSettingsStore();
  const [apiKeyInput, setApiKeyInput] = useState(claudeApiKey || '');
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'connected' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'general' | 'api' | 'notifications'>('api');

  const handleTestConnection = async () => {
    setConnectionStatus('testing');
    // Simulate API test
    setTimeout(() => {
      if (apiKeyInput && apiKeyInput.length > 10) {
        setConnectionStatus('connected');
        setClaudeApiKey(apiKeyInput);
      } else {
        setConnectionStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <Settings className="w-10 h-10 text-primary-500" />
          Settings
        </h1>
        <p className="text-gray-600">Configure your LoopSync instance</p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex gap-2">
          {[
            { id: 'general' as const, label: 'General' },
            { id: 'api' as const, label: 'API Keys' },
            { id: 'notifications' as const, label: 'Notifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'glass text-gray-700 hover:bg-white/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* API Keys Tab */}
      {activeTab === 'api' && (
        <motion.div
          key="api"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Claude API Key */}
          <GlassCard className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Key className="w-6 h-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Claude API Key</h3>
                <p className="text-sm text-gray-600">
                  Required for Coro AI to analyze feedback and generate insights. Get your API key from{' '}
                  <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    console.anthropic.com
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <Input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="sk-ant-..."
                  className="w-full"
                />
              </div>

              {/* Connection Status */}
              {connectionStatus !== 'idle' && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  connectionStatus === 'connected' ? 'bg-green-50 text-green-700' :
                  connectionStatus === 'error' ? 'bg-red-50 text-red-700' :
                  'bg-blue-50 text-blue-700'
                }`}>
                  {connectionStatus === 'connected' && <Check className="w-5 h-5" />}
                  {connectionStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                  <span className="text-sm font-medium">
                    {connectionStatus === 'connected' && 'Connected successfully!'}
                    {connectionStatus === 'error' && 'Connection failed. Check your API key.'}
                    {connectionStatus === 'testing' && 'Testing connection...'}
                  </span>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={handleTestConnection}
                  disabled={connectionStatus === 'testing'}
                  className="flex-1"
                >
                  {connectionStatus === 'testing' ? 'Testing...' : 'Test Connection'}
                </Button>
                <Button
                  onClick={() => {
                    setClaudeApiKey(apiKeyInput);
                    setConnectionStatus('idle');
                  }}
                  variant="secondary"
                  className="flex-1"
                >
                  Save
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Usage Metrics */}
          {connectionStatus === 'connected' && (
            <GlassCard className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">API Usage (This Month)</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Requests</div>
                  <div className="text-3xl font-bold text-gray-900">1,247</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Tokens Used</div>
                  <div className="text-3xl font-bold text-gray-900">2.4M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Est. Cost</div>
                  <div className="text-3xl font-bold text-gray-900">$42</div>
                </div>
              </div>
            </GlassCard>
          )}
        </motion.div>
      )}

      {/* General Tab */}
      {activeTab === 'general' && (
        <motion.div
          key="general"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <GlassCard className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">Company Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input type="text" defaultValue="Acme Corp" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select defaultValue="51-200 employees" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <motion.div
          key="notifications"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <GlassCard className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">Email Notifications</h3>
            <div className="space-y-4">
              {[
                { label: 'New feedback submitted', defaultChecked: true },
                { label: 'Critical risk alerts', defaultChecked: true },
                { label: 'Weekly summary reports', defaultChecked: true },
                { label: 'Daily digest', defaultChecked: false },
              ].map((item) => (
                <label key={item.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.defaultChecked}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}
